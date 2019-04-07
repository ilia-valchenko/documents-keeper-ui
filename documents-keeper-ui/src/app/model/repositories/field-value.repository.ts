import { Injectable } from "@angular/core";
import { FieldValue } from "../field-value.model";
import { RestDataSource } from "../datasources/rest.datasource";

@Injectable()
export class FieldValueRepository {
    private fieldValues: FieldValue[] = [];

    constructor(private dataSource: RestDataSource) { }
}