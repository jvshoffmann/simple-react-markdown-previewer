import React from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
marked.setOptions({
  renderer:renderer
});
class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      markdown: starterText
    };
    this.handleChange = this.handleChange.bind(this);
  }
   handleChange(v){
       this.setState ({
       markdown: v.target.value
     })
  };
  render(){
    return(
      <div id = "background">
        <Editor markdown = {this.state.markdown} handleChange = {this.handleChange}/>
        <Preview markdown = {this.state.markdown} />
      </div>
     )
   }
}

const Editor = props => {
  return (
    <div class = "bg">
     <div class = "titlebar">Editor</div>
     <textarea id="editor" value={props.markdown} onChange = {props.handleChange} />
    </div>
  )
}

const Preview = props => {
  return(
    <div class = "bg">
      <div class = "titlebar">Preview</div>
      <div dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderer }) }} id="preview" />
    </div>

  )
}
const var1 = 7;
const starterText =`This is a converter that allows you to write a text, formatting it using markdown.
Here is some examples, and a previewer down below. 
# H1
## H2
[link](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO)

\`<div>code</div>\`
\`\`\`
//code block:
const Editor = props => {
  return (
    <textarea id="editor" value={props.markdown} onChange = {props.handleChange} />
  )
}
\`\`\`
1. list1
2. list2
>block quote   

![image](https://icon-library.com/images/thumbs-up-png-icon/thumbs-up-png-icon-13.jpg)
**bolded text**
`
export default App;
