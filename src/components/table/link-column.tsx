import * as React from "react";

export interface LinkColumnProps {
    property: string;
    header: string;
    linkTo: string;
}

export interface LinkColumnState {

}

export class LinkColumn extends React.Component<LinkColumnProps, LinkColumnState> {
}