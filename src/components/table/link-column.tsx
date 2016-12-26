import * as React from "react";
import { Column, ColumnProps, ColumnState } from "./column";

export interface LinkColumnProps extends ColumnProps {
    linkTo: string;
    captureFromRow?: boolean;
}

export interface LinkColumnState {

}

export class LinkColumn extends Column<LinkColumnProps, LinkColumnState> {
}