/*jshint esversion: 6 */

const gulp = require('gulp')
const gutil = require('gulp-util')
const less = require('gulp-less')
const sass = require('gulp-sass')
const coffee = require('gulp-coffee')
const minifycss = require('gulp-csso')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const filter = require('gulp-filter')
const gap = require('gulp-append-prepend')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const using = require('gulp-using')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const glob = require('glob')
const browserify = require('browserify')
const tsify = require('tsify')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const lesshint = require('gulp-lesshint')
const es = require('event-stream')
const argsv = require('yargs').argv
const path = require('path')

gulp.task('less-app', function() {
  return gulp
    .src([ './public/less/default/cliente/_variables.less', './public/less/default/cliente/_ext.less' ])
    .pipe(concat('app_cliente_ext.min.css'))
    .pipe(less())
    .pipe(minifycss({ comments: false }))
    .pipe(gulp.dest('./public/css/default/'))
})

gulp.task('less-page', function(done) {
  /** @var String */
  var filePattern

  if (argsv.file) {
    filePattern = argsv.file
  } else {
    require('dotenv').config({ path: path.resolve(process.cwd(), 'public/webapps', '.env') })
    const current_entry = process.env.WEBPACK_CURRENT_ENTRY.replace(/\/.*/, '').replace('__', '_')
    filePattern = `./public/less/default/cliente/${current_entry}.scss`
  }

  // If file is a SASS file.
  if (/^[a-zA-Z].*\.scss$/.test(path.basename(filePattern))) {
    const f = filter((file) => !/\\_[A-Z0-9]+\.[A-Z0-9]+$/i.test(file.path))

    let prefixRename, destinationFolder
    if (path.basename(path.dirname(filePattern)) === 'plugins') {
      prefixRename = ''
      destinationFolder = './public/css/plugins/'
    } else {
      prefixRename = 'app_cliente-'
      destinationFolder = './public/css/default/'
    }

    return gulp
      .src([ filePattern ])
      .pipe(sass().on('error', sass.logError))
      .pipe(f)
      .pipe(using())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(minifycss({ comments: false }))
      .pipe(rename({ prefix: prefixRename, suffix: '.min' }))
      .pipe(gap.appendText('\n'))
      .pipe(gulp.dest(destinationFolder))
  }

  if (!/^[a-zA-Z].*\.less$/.test(path.basename(filePattern))) {
    throw new gutil.PluginError({
      plugin: 'Task less-page',
      message: `File "${filePattern}" is not a valid LESS/SCSS file.`
    })
  }

  // Exclude _<files>
  const f = filter((file) => !/\\_[A-Z0-9]+\.[A-Z0-9]+$/i.test(file.path))

  return gulp
    .src([
      filePattern,
      '!./public/less/default/cliente/_*.less',
      '!./public/less/default/cliente/login.less',
      '!./public/less/default/cliente/ie.less',
      './public/less/default/cliente/_variables.less'
    ])
    .pipe(gap.prependFile('./plugins/sf3CreativesPlugin/public/less/3c/elements.less'))
    .pipe(less())
    .pipe(lesshint())
    .pipe(lesshint.failOnError())
    .pipe(f)
    .pipe(using())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(minifycss({ comments: false }))
    .pipe(rename({ prefix: 'app_cliente-', suffix: '.min' }))
    .pipe(gap.appendText('\n'))
    .pipe(gulp.dest('./public/css/default/'))
})

gulp.task('ts', function(done) {
  var filePattern
  if (argsv.file) {
    filePattern = argsv.file
    if (!/^[a-zA-Z].*\.ts$/.test(path.basename(filePattern))) {
      throw new gutil.PluginError({
        plugin: 'Task ts',
        message: `File "${filePattern}" is not a valid Typescript file.`
      })
    }
  } else {
    filePattern = './public/ts/**/*.ts'
  }
  glob(filePattern, { ignore: [ './public/ts/**/_*.ts' ] }, function(err, files) {
    if (err) done(err)

    var tasks = files.map(function(entry) {
      return browserify({ entries: [ entry ], debug: true })
        .plugin(tsify, { target: 'es5', removeComments: true })
        .transform('babelify', { presets: [ 'env' ], extensions: [ '.ts' ] })
        .bundle()
        .pipe(source(entry))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify({ output: { braces: true, semicolons: true } }))
        .pipe(using())
        .pipe(
          rename(function(fileObj) {
            fileObj.extname = '.min.js'
            fileObj.dirname = fileObj.dirname.replace('public\\ts', '')
          })
        )
        .pipe(
          sourcemaps.write('./', {
            sourceMappingURL: (file) => {
              return 'http://auditbrain.local/js/' + file.relative.replace(/\\/g, '/') + '.map'
            }
          })
        )
        .pipe(gulp.dest('./public/js'))
    })
    es.merge(tasks).on('end', done)
  })
})

gulp.task('coffee', function() {
  var filePattern
  if (argsv.file) {
    filePattern = argsv.file
    if (!/^[a-zA-Z].*\.coffee$/.test(path.basename(filePattern))) {
      throw new gutil.PluginError({
        plugin: 'Task coffee',
        message: `File "${filePattern}" is not a valid Coffeescript file.`
      })
    }
  } else {
    filePattern = './public/coffee/apps/*.coffee'
  }

  return gulp
    .src(filePattern)
    .pipe(using())
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(babel({ presets: [ '@babel/env' ] }))
    .pipe(uglify({ output: { braces: true, semicolons: true } }))
    .pipe(
      rename(function(fileObj) {
        fileObj.extname = '.min.js'
        if (!fileObj.extname.endsWith('.map')) {
        }
        fileObj.dirname = fileObj.dirname.replace('public\\coffee', '')
      })
    )
    .pipe(
      sourcemaps.write('./', {
        sourceMappingURL: (file) => {
          return 'http://auditbrain.local/js/apps/' + file.relative.replace(/\\/g, '/') + '.map'
        }
      })
    )
    .pipe(gulp.dest('./public/js/apps/'))
})

gulp.task('compress-css', function() {
  return gulp.src(argsv.file).pipe(using()).pipe(minifycss({ comments: false })).pipe(
    gulp.dest(function(file) {
      return path.dirname(file.path)
    })
  )
})

gulp.task('less', gulp.series('less-app', 'less-page'))

gulp.task('default', gulp.series('ts'))

gulp.task('all', gulp.series('ts', 'less'))
