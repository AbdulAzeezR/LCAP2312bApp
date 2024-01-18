export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MobileCapex/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MobileCapex/Actions/Capex/Capex_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MobileCapex/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Capex',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MobileCapex/Actions/Capex/Capex_CreateEntity.action');
    }
}