export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MobileCapex/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MobileCapex/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Capex'
                },
                'OnSuccess': '/MobileCapex/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MobileCapex/Actions/CloseModalPage_Cancel.action');
    }
}