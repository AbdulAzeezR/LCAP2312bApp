export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MobileCapex/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MobileCapex/Actions/Capex/Capex_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MobileCapex/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Capex'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MobileCapex/Actions/Capex/Capex_UpdateEntity.action');
    }
}