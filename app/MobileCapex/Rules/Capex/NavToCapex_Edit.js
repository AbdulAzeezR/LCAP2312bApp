export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MobileCapex/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MobileCapex/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Capex'
                },
                'OnSuccess': '/MobileCapex/Actions/Capex/NavToCapex_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MobileCapex/Actions/Capex/NavToCapex_Edit.action');
    }
}