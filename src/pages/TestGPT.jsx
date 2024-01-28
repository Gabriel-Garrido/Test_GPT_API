import React, { useState } from 'react';

export function TestGPT() {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api.openai.com/v1/completions', { // Asegúrate de usar el endpoint correcto
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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' // Reemplaza 'tu_api_key_aquí' con tu API key real
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo', // Especifica el modelo que deseas utilizar
                    prompt: inputText,
                    max_tokens: 150 // Ajusta según tus necesidades
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setResponseText(data.choices[0].text); // Ajusta según la estructura de la respuesta de la API
        } catch (error) {
            console.error('Hubo un problema con tu solicitud de la API: ', error);
            setResponseText('Error al procesar la solicitud.');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row my-5">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-start">
                        ¡Bienvenido a nuestra Aplicación de Prueba de GPT-3!
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputText">Escribe algo para que GPT-3 responda:</label>
                            <textarea
                                className="form-control"
                                id="inputText"
                                rows="3"
                                value={inputText}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Enviar</button>
                    </form>
                    {responseText && (
                        <div className="response mt-3">
                            <h3>Respuesta de GPT-3:</h3>
                            <p>{responseText}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
