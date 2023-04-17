import React, { useState, useEffect } from 'react';
import './App.css';

function Advice() {
  const [data, setData] = useState<any>('');
  const [backgroundColor, setBackground] = useState('');

    useEffect(() => {
        handlePromise();
    }, []);

    function shareTwitter() {
        window.open(
            "https://twitter.com/share?url=" + data,
            '',
            'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=300'
        );
    }

    function handlePromise() {
        const promesa = new Promise((resolve, reject) => {
            fetch('https://api.adviceslip.com/advice')
                .then(response => response.json())
                .then(data => {
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    setBackground("#" + randomColor);
                    resolve(data.slip.advice);
                })
                .catch(error => {
                    reject(error);
                });
        });
    
        promesa.then((resultado) => {
            setData(resultado);
        }).catch((error) => {
            console.error(error);
        });
    }
    
  return (
    <section id="adviceContent" className="grid-advice-content">
        <section id="advice" className="grid-advice" style={{ backgroundColor }}>
            <section id="adviceTextSection">
                <h2 id="adviceText" className="advice-text margin-left margin-right">{data}</h2>
            </section>
        </section>
        <section id="buttonsContent" className="grid-buttons">
            <section id="changeAdviceSection" className="grid-change-button flex-row">
                <section className="flex-row">
                    <button id="buttonChange" className="button-change"
                    onClick={handlePromise}>Another One Please</button>
                </section>

                <section id="shareSection" className="grid-share-button">
                    <section className="flex-right">
                        <button type="button" className="button-share"
                            onClick={shareTwitter}></button>
                    </section>
                </section>
            </section>
        </section>
    </section>
  );
}

export default Advice;