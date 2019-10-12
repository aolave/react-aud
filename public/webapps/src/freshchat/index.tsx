declare var app: any;
declare var fcSettings: any;
declare var fcWidget: any;

declare function url_for(url: string): string
class InitFreshChat {
	restoreId: string;
	constructor(restoreId: string) {
		this.restoreId = restoreId;
	}
	/**
     * recibe parametros de cofiguracion *
     * @returns inicializa el chat
     */
	chat() {
		let api = app.vars.freshchat.api;
		window.fcSettings = {
			token: api.token,
			host: api.host,
			externalId: api.externalId,
			restoreId: this.restoreId ? this.restoreId : null, //Have the widget open on load by default by setting the below value to true
			open: api.open,
			config: {
				//Disable Events Tracking
				disableEvents: false,
				cssNames: {
					widget: 'fc_frame',
					open: 'fc_open',
					expanded: 'fc_expanded'
				},
				showFAQOnOpen: true,
				hideFAQ: true,
				agent: {
					hideName: false,
					hidePic: true,
					hideBio: true
				},
				headerProperty: {
					backgroundColor: '#45a4ec',
					foregroundColor: '#ffffff',
					hideChatButton: false, //Set Widget to be left to right.
					direction: 'ltr'
				}
			},
			onInit: function() {
				let users = app.vars.freshchat.user;
				const url: string = url_for(`freshchat/${users.idUser}/save`); // modify, this chage
				window.fcWidget.user.get(function(resp: any) {
					let status = resp.status;
					if (status !== 200) {
						window.fcWidget.user.setProperties({
							firstName: users.firstName,
							lastName: users.lastName,
							email: users.email,
							phone: users.phoneNumber,
							phoneCountryCode: users.phoneCode,
							plan: users.plan,
							status: users.status
							//"Meta": users.meta
						});
						window.fcWidget.on('user:created', function(resp: any) {
							let status = resp.status;
							let data = resp.data;
							if (status === 200) {
								if (data.restoreId) {
									// Update restoreId in your database
									$.post(url, { user: users.idUser, restoreId: data.restoreId }, $.noop, 'json'); // modify this chage
								}
							}
						});
					}
				});
			}
		};
		return this.restoreId;
	}
}
let initpreshchat = new InitFreshChat(app.vars.freshchat.restoreId);
initpreshchat.chat();
