import * as React from "react";
import { Column, ColumnProps } from "./column";
import { LinkColumn, LinkColumnProps } from "./link-column";
import { ImageColumn, ImageColumnProps } from "./image-column";
import { Link } from "react-router";

export interface TableProps {
    data: {}[];
}

export interface TableState {

}

export class Table extends React.Component<TableProps, TableState> {
    constructor() {
        super();
    }

    private getRows() {
        return this.props.data.map((data: any, i: number) => {
            const rows: any[] = [];

            const columns = React.Children.forEach(this.props.children, (child: React.ReactChild, j: number) => {
                const ch = child as IRChild;

                if (ch.type === Column) {
                    const col = ch as IRChildP<ColumnProps>;
                    rows.push(this.getColumn(data, col, j));
                } else if (ch.type === LinkColumn) {
                    const col = ch as IRChildP<LinkColumnProps>;
                    rows.push(this.getLinkColumn(data, col, j));
                } else if (ch.type === ImageColumn) {
                    const col = ch as IRChildP<ImageColumnProps>;
                    rows.push(this.getImageColumn(data, col, j));
                }
            });

            return <tr key={i}>{rows}</tr>;
        });
    }

    private getColumn(data: any, col: IRChildP<ColumnProps>, key: number) {
        return <td key={key}>{data[col.props.property].toString()}</td>
    }

    private getLinkColumn(data: any, col: IRChildP<LinkColumnProps>, key: number) {
        const text = data[col.props.property].toString();
        const link = this.replaceWithValue(data, col.props.linkTo);

        return (
            <td key={key}>
                <Link to={link}>{text}</Link>
            </td>
        );
    }

    private getImageColumn(data: any, col: IRChildP<ImageColumnProps>, key: number) {
        const url = data[col.props.property];

        return (
            <td key={key}>
                <img src={url} alt={url} />
            </td>
        );
    }

    private replaceWithValue(data: any, link: string) {
        const parts: {linkSub: string, prop: string}[] = [];
        const regex = /{(\w+)}/g;

        while (true) {
            const match = regex.exec(link);

            if (!match) {
                break;
            }

            parts.push({ linkSub: match[0], prop: match[1] });
        }

        let result = link;
        parts.forEach((part) => {
            const rx = new RegExp(part.linkSub, "g");
            result = result.replace(rx, data[part.prop]);
        });

        return result;
    }

    public render() {
        const columns = this.props.children as Column[];
        const children = React.Children.toArray(this.props.children);

        const headers = columns.map((col: Column, i: number) => <th key={i}>{col.props.header}</th>);
        const rows = this.getRows();

        return (
            <table className="table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

interface IRChild {
    type: Function;
}

interface IRChildP<TProps extends {}> extends IRChild {
    props: TProps
}