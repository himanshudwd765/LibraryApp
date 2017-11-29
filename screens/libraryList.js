import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  FlatList,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addBook, deleteBook } from 'LibraryApp/actions';
import TextHeader from 'LibraryApp/components/textHeader';

class LibraryList extends Component {

    _keyExtractor = (item, index) => index;

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    addBookInLibrary = () => {
        if (this.state.inputValue === '') return;
        this.props.dispatchAddBook({
          name: this.state.inputValue,
        });
        this.setState({ inputValue: '' });
    }

    deleteBookFromLibrary = (book) => {
        this.props.dispatchdeleteBook(book)
      }

    updateInput = (inputValue) => {
        this.setState({ inputValue })
    }

    render() {
      return (
        <View style={styles.container}>
            <TextInput
            onChangeText={text => this.updateInput(text)}
            style={styles.input}
            value={this.state.inputValue}
            placeholder="Enter Book name"
            />
            <TouchableHighlight
                underlayColor="#0d66a2"
                style={styles.button}
                onPress={this.addBookInLibrary}>
            <Text style={styles.buttonText}>Add Book</Text>
            </TouchableHighlight>
            <TextHeader text={'* List of Books *'}/>
            <View>
                <FlatList
                    data={this.props.books}
                    renderItem={this._renderBookListRow.bind(this)}
                    ItemSeparatorComponent={this._renderSeparator}
                    keyExtractor={this._keyExtractor}
                    style={{margin:5}}
                />
            </View>

      </View>
      );
    }

    _renderBookListRow(rowData){
        return(
            <View style={{flexDirection:'row', padding:5, justifyContent:'space-between'}}>
                <Text style={{fontSize:18}}>{(rowData.index+1)+". "+rowData.item.name}</Text>
                <TouchableHighlight underlayColor = 'transparent' onPress={() => this.deleteBookFromLibrary(rowData.item)}>
                    <Text style={{fontSize:15, color:'red'}}>Remove</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _renderSeparator() {
        return (
          <View style={{flex: 1,height: 1,backgroundColor: '#CCCCCC'}}></View>
        );
    }
}

/* This function will take the state object and map it as props  */
function mapStateToProps (state) {
    return {
      books: state.libraryReducer.books
    }
  }
  
function mapDispatchToProps (dispatch) {
    return {
      dispatchAddBook: (book) => dispatch(addBook(book)),
      dispatchdeleteBook: (book) => dispatch(deleteBook(book))
    }
}
  
/* Connect function helps to connect component with store */
export default connect(mapStateToProps,mapDispatchToProps)(LibraryList)

/* Styles for the view */
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    
    input: {
      backgroundColor: '#e4e4e4',
      height: 40,
      borderRadius: 3,
      padding: 5,
      marginTop: 12,
      fontSize:18
    },
    button: {
      backgroundColor: '#0d66a2',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
      borderRadius: 3,
      marginBottom:20
    },
    buttonText: {
      color: 'white',
      fontWeight:'500',
      fontSize:20
    },
});
  