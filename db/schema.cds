namespace TestApp;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Capex
{
    key ID : UUID;
    Title : String(100);
    Amount : Decimal(12,2);
    Category : Association to one Categories;
}

entity Categories
{
    key ID : Integer;
    Name : String(100);
}
