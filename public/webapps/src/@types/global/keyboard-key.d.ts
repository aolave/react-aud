
declare module 'keyboard-key' {

  type KeyboardKey = {

    $: number
    A: number
    Accept: number
    Alt: number
    AltGraph: number
    Ampersand: number
    ArrowDown: number
    ArrowLeft: number
    ArrowRight: number
    ArrowUp: number
    AtSign: number
    Attn: number
    B: number
    BackSlash: number
    Backspace: number
    C: number
    Cancel: number
    CapsLock: number
    Caret: number
    Clear: number
    Colon: number
    Comma: number
    ContextMenu: number
    Control: number
    Convert: number
    CrSel: number
    D: number
    Decimal: number
    Delete: number
    Digit0: number
    Digit1: number
    Digit2: number
    Digit3: number
    Digit4: number
    Digit5: number
    Digit6: number
    Digit7: number
    Digit8: number
    Digit9: number
    DivisionSign: number
    DoubleQuote: number
    E: number
    End: number
    Enter: number
    EqualsSign: number
    EraseEof: number
    Escape: number
    ExSel: number
    ExclamationPoint: number
    Execute: number
    F: number
    F1: number
    F10: number
    F11: number
    F12: number
    F13: number
    F14: number
    F15: number
    F16: number
    F17: number
    F18: number
    F19: number
    F2: number
    F20: number
    F21: number
    F22: number
    F23: number
    F24: number
    F3: number
    F4: number
    F5: number
    F6: number
    F7: number
    F8: number
    F9: number
    G: number
    GraveAccent: number
    H: number
    Help: number
    Home: number
    I: number
    Insert: number
    J: number
    K: number
    L: number
    LeftAngleBracket: number
    LeftCurlyBrace: number
    LeftParenthesis: number
    LeftSquareBracket: number
    M: number
    Meta: number
    MinusSign: number
    ModeChange: number
    MultiplicationSign: number
    N: number
    NonConvert: number
    NumLock: number
    O: number
    OS: number
    P: number
    PageDown: number
    PageUp: number
    Pause: number
    PercentSign: number
    Pipe: number
    Play: number
    PlusSign: number
    PoundSign: number
    Print: number
    PrintScreen: number
    Q: number
    QuestionMark: number
    R: number
    RightAngleBracket: number
    RightCurlyBrace: number
    RightParenthesis: number
    RightSquareBracket: number
    S: number
    ScrollLock: number
    Select: number
    Semicolon: number
    Shift: number
    SingleQuote: number
    Spacebar: number
    T: number
    Tab: number
    Tilde: number
    U: number
    V: number
    VolumeDown: number
    VolumeMute: number
    VolumeUp: number
    W: number
    X: number
    Y: number
    Z: number
    ZoomOut: number
    a: number
    b: number
    c: number
    codes: {
      "112": string
      "113": string
      "114": string
      "115": string
      "116": string
      "117": string
      "118": string
      "119": string
      "12": string
      "120": string
      "121": string
      "122": string
      "123": string
      "124": string
      "125": string
      "126": string
      "127": string
      "128": string
      "129": string
      "13": string
      "130": string
      "131": string
      "132": string
      "133": string
      "134": string
      "135": string
      "144": string
      "145": string
      "16": string
      "17": string
      "18": string
      "181": string
      "182": string
      "183": string
      "186": string[]
      "187": string[]
      "188": string[]
      "189": string[]
      "19": string
      "190": string[]
      "191": string[]
      "192": string[]
      "20": string
      "219": string[]
      "220": string[]
      "221": string[]
      "222": string[]
      "224": string
      "225": string
      "246": string
      "247": string
      "248": string
      "249": string
      "250": string
      "251": string
      "27": string
      "28": string
      "29": string
      "3": string
      "30": string
      "31": string
      "32": string
      "33": string
      "34": string
      "35": string
      "36": string
      "37": string
      "38": string
      "39": string
      "40": string
      "41": string
      "42": string
      "43": string
      "44": string
      "45": string
      "46": string
      "48": string[]
      "49": string[]
      "50": string[]
      "51": string[]
      "52": string[]
      "53": string[]
      "54": string[]
      "55": string[]
      "56": string[]
      "57": string[]
      "6": string
      "65": string[]
      "66": string[]
      "67": string[]
      "68": string[]
      "69": string[]
      "70": string[]
      "71": string[]
      "72": string[]
      "73": string[]
      "74": string[]
      "75": string[]
      "76": string[]
      "77": string[]
      "78": string[]
      "79": string[]
      "8": string
      "80": string[]
      "81": string[]
      "82": string[]
      "83": string[]
      "84": string[]
      "85": string[]
      "86": string[]
      "87": string[]
      "88": string[]
      "89": string[]
      "9": string
      "90": string[]
      "91": string
      "93": string
    }

    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number

    getCode(eventOrKey: string|Event|{key:string}|{keyCode:string}|{which:string}): any
    getKey(eventOrCode: number|Event|{key:number}|{keyCode:number}|{which:number}|{shiftKey:number}): any

  }

  var keyboardKey: KeyboardKey
  export default keyboardKey
}
