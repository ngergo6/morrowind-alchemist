import * as React from "react";
import { Column, ColumnProps, ColumnState } from "./column";

export interface ImageColumnProps extends ColumnProps {
    
}

export interface ImageColumnState extends ColumnState {

}

export class ImageColumn extends Column<ImageColumnProps, ImageColumnState> {
    
}