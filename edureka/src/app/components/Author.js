import React from "react";
import { Table, Image, Button, Header, Icon } from 'semantic-ui-react';

export class Author extends React.Component {
    toCamelCase(input) {
        //console.log("Input: " + input);
        var words = input.split(' ');
        var camelized =  '';
        for (var index in words) {
            var word = words[index];
            camelized = camelized + word.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
                return match.charAt(match.length-1).toUpperCase();
            });
            camelized = camelized + ' ';
        }
        //console.log("Output: " + camelized);
        return camelized;     
    }
        

    render() {
        const authors = this.props.authors || []; 
        //console.log('Authors: ' + authors);

        if (authors.length < 1) {
            return null;
        }

        return (
            <div>
            <Table celled>
                <Table.Header>
                    <Table.Row hei>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        {/* <Table.HeaderCell>Name</Table.HeaderCell> */}
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    authors.map((author, index) =>
                        <Table.Row>
                            <Table.Cell>
                                <Image src={author.picture.large} shape='rounded' size='mini' />
                            </Table.Cell>
                            <Table.Cell width='4'>
                                <Header as='h4' image>
                                    <Header.Content>
                                        {this.toCamelCase(author.name.title + ' ' 
                                            + author.name.first + ' ' + author.name.last)}
                                    </Header.Content>
                                </Header>
                            
                                <p>{'Email Id: ' + author.email}</p>
                                <p>{'Phone Number: ' + author.phone}</p>
                            </Table.Cell>
                        </Table.Row>
                    )
                }
                </Table.Body>
            </Table>
            </div>
        );
    }
}
