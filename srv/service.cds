using { TestApp as my } from '../db/schema';

@path : '/service/TestApp'
service TestAppService
{
    @odata.draft.enabled
    entity Capex as
        projection on my.Capex;

    entity Categories as
        projection on my.Categories;
}

annotate TestAppService with @requires :
[
    'authenticated-user'
];
