import * as React from "react";

export interface SearchBoxProps {
    placeholder: string;
    onSearched: (value: string) => void;
}

export interface SearchBoxState {
    value?: string;
}

export class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    constructor(props: SearchBoxProps) {
        super(props);
        this.state = {
            value: ""
        }
    }

    private onSearchClicked() {
        this.props.onSearched(this.state.value);
    }

    private onSearchEnter(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            this.onSearchClicked();
        }
    }

    private onInputChanged(event: Event) {
        const input = event.target as HTMLInputElement;

        this.setState({
            value: input.value
        });
    }

    public render() {
        return (
            <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-secondaty" type="button">Search</button>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onInputChanged.bind(this)}
                    onKeyDown={this.onSearchEnter.bind(this)}
                    onClick={this.onSearchClicked.bind(this)} />
            </div>
        );
    }
}