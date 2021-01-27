import React from 'react';
import './App.css';
import marked from 'marked';

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
      <div>
        <Editor markdown = {this.state.markdown} handleChange = {this.handleChange}/>
        <Preview markdown = {this.state.markdown} />
      </div>
     )
   }
}

const Editor = props => {
  return (
    <textarea id="editor" value={props.markdown} onChange = {props.handleChange} />
  )
}

const Preview = props => {
  return(
    <div dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderer }) }} id='preview' />
  )
}
const var1 = 7;
const starterText =`# H1
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
