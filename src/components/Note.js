import React, { Component } from 'react'

class Note extends Component {
  onSubmit (e) {
    e.preventDefault()
    const formData = {
      title: this.title.value,
      content: this.content.value
    }
    this.props.submitNote(formData, this.props.note._id)
  }

  onTagSubmit (e) {
    e.preventDefault()
    const formData = {
      name: this.name.value
    }
    this.props.submitTag(formData, this.props.note._id)
    this.props.closeTagForm()
  }

  render () {
    const { note, closeTagForm } = this.props
    return (
      <div className='note-container'>
        <h2>Edit This Note</h2>
        <form
          className='note-form'
          onSubmit={(e) => this.onSubmit(e)}
          onClick={() => closeTagForm()}
        >
          <div className='note-title'>
            <input
              className='note-title-input'
              type='text'
              placeholder='Note Title...'
              defaultValue={note.title}
              ref={(input) => this.title = input}
            />
          </div>
          <div className='note-textarea-container'>
            <textarea
              className='note-textarea'
              placeholder='Type Here...'
              defaultValue={note.content}
              ref={(input) => this.content = input}
            />
          </div>
          <input className='note-button' type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default Note
