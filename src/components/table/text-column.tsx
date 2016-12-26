import * as React from "react";
import { Column, ColumnProps, ColumnState } from "./column";

export interface TextColumnProps extends ColumnProps {

}

export interface TextColumnState extends ColumnState {

}

export class TextColumn extends Column<TextColumnProps, TextColumnState> {
    
}