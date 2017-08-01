import React, {Component} from 'react';

class EditorPreview extends Component {
    render() {
        return (
            <div className='editor-display'>
                    <header>
                        <h1> Заголовок страницы </h1>
                        <h3> Описание страницы </h3>
                    </header>
                    <section>
                        <p> Какой-то текст </p>
                        <ul>
                            <li> список </li>
                        </ul>
                    </section>
                    <footer>
                        <h4> Контактные данные </h4>
                        <h6><strong>Email: </strong> lynx@g.com </h6>
                    </footer>
                </div>
        );
    }
}

export default EditorPreview;