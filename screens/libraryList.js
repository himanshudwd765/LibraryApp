import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addBook } from 'LibraryApp/actions';
import TextHeader from 'LibraryApp/components/textHeader';

class LibraryList extends Component {

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
            <ScrollView>
                {
                this.props.books.map((book, index) => (
                    <View key={index} style={{marginTop:12}}>
                    <Text style={{fontSize:20}}>Name: {book.name}</Text>
                    </View>
                ))
                }
            </ScrollView>

      </View>
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
    }
}
  
// Connect function helps to connect component with store
export default connect(mapStateToProps,mapDispatchToProps)(LibraryList)

//Styles for the view
const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 20,
    },
    
    input: {
      backgroundColor: '#e4e4e4',
      height: 55,
      borderRadius: 3,
      padding: 5,
      marginTop: 12,
      fontSize:18
    },
    button: {
      backgroundColor: '#0d66a2',
      height: 60,
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
  