import React from 'react';

const FaqItem = (props) => {
    return (
        <section>
            <div>
                <span >{props.question}</span>
                <button onClick={props.handleFaq}>{props.isOpen ? '-' : '+'}</button>
            </div>
            <div className={props.isOpen ? "show" : 'hide'}>
                <span >{props.answer}</span>
                <button onClick={props.handleFaq1}>{props.textIsOpen ? '-' : '+'}</button>
            </div >
            <p className={props.textIsOpen ? "show" : 'hide'}>{props.answerLong}</p>
        </section>
    );
}

export default FaqItem;