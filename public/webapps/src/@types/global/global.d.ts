declare function url_for(url: string): string
declare function url_for2(url: string, params?: { [k: string]: any }): string
declare function public_path(url: string, relative?: boolean): string
declare function user_has_role(roles: string | string[]): boolean
declare function user_has_role_permission(permission: string | string[]): boolean
declare function es_proyecto_editable(): boolean
declare function create_blockUI_loading_message(message: string): { message: string }

interface DateConstructor {
  create(string?: string): any
}
