import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container, Content, Card, CardItem, Text,Icon, Right, Left, Thumbnail, Body, Button} from 'native-base';


export default class MainComponent extends Component{
   
    render(){
        const {navigation} = this.props;
        
        return(
            
            <Container>
                <Content>

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../images/avatar_feed.png')} />
                                <Body>
                                    <Text>Amelia Fern</Text>
                                    <Text note>2 days ago</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../images/image_feed.png')} />
                                <Text style={{fontSize:14,paddingTop:10}}> 
                                If you want an amazing backdrop for your wedding pictures, try these stunning sites from across the globe. You wouldn&apos;t...more.
                                #traveling #travel #amazingplace
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Image source={require('../icons/like.png')} />
                                    <Text>Like</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Image source={require('../icons/comment.png')}/>
                                    <Text>Comment</Text>
                                </Button>
                            </Body>
                            <Right>
                            <Button transparent>
                                    <Image source={require('../icons/share.png')}/>
                                    <Text>Sharing</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}