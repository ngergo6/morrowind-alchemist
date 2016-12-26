import * as React from "react";

export interface ColumnProps {
    property: string;
    header: string;
}

export interface ColumnState {

}

export abstract class Column<TColumnProps extends ColumnProps, TColumnState extends ColumnState> extends React.Component<TColumnProps, TColumnState> {
    
}