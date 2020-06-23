import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import qs from "qs";

import {
  Wrapper,
  Card,
  Templates,
  Form,
  Button,
  ButtonReset,
  Toggle,
} from "./styles";

import logo from "../../assets/logo.svg";

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [generatedMeme, setGeneratedMeme] = useState(null);
  const [dimesions, setDimesions] = useState({});
  const [checked, setChecked] = useState(false);
  const [dark, setDark] = useState("");

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://api.imgflip.com/get_memes");

      const {
        data: { memes },
      } = await resp.json();
      setTemplates(memes);
    })();
  }, []);

  //? Curring -> função que retorna outra função.
  const handleInputChange = (idx) => (e) => {
    const newValues = boxes;

    newValues[idx] = e.target.value;
    setBoxes(newValues);
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setBoxes([]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //? Crie uma conta no "https://api.imgflip.com/" é abaixo coloque seu username é password;

    const params = qs.stringify({
      template_id: selectedTemplate.id,
      username: "exemploMemeMaker",
      password: "exemploPassword",
      boxes: boxes.map((text) => ({ text })),
    });

    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
    const {
      data: { url },
    } = await resp.json();

    setGeneratedMeme(url);

    setDimesions({
      width: selectedTemplate.width,
      position: "center",
      height: "100%",
    });
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setBoxes([]);
    setGeneratedMeme(null);
    setDimesions({
      width: "550px",
    });
  };

  return (
    <ThemeProvider theme={{ background: dark, color: "#fff" }}>
      <Toggle>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            checked === false ? setDark("#111116") : setDark("");
          }}
        />
        <span className="check"></span>
      </Toggle>
      <Wrapper height={dimesions ? dimesions.height : ""}>
        <img src={logo} alt="MemeMaker" />
        <Card
          width={dimesions ? dimesions.width : ""}
          position={dimesions ? dimesions.position : ""}
        >
          {generatedMeme && (
            <>
              <img src={generatedMeme} alt="Generated Meme" />
              <ButtonReset type="button" onClick={handleReset}>
                Criar novo meme
              </ButtonReset>
            </>
          )}
          {!generatedMeme && (
            <>
              <h2>Selecione o template</h2>
              <Templates>
                {templates.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => handleSelectTemplate(template)}
                    className={
                      template.id === selectedTemplate?.id ? "selected" : ""
                    }
                  >
                    <img src={template.url} alt={template.name} />
                  </button>
                ))}
              </Templates>
              {selectedTemplate && (
                <>
                  <h2>Textos</h2>
                  <Form onSubmit={handleSubmit}>
                    {new Array(selectedTemplate.box_count)
                      .fill("")
                      .map((_, idx) => (
                        <input
                          key={String(Math.random())}
                          placeholder={`Text #${idx + 1}`}
                          onChange={handleInputChange(idx)}
                        />
                      ))}
                    <Button type="submit">MakeMyMeme!</Button>
                  </Form>
                </>
              )}
            </>
          )}
        </Card>
      </Wrapper>
    </ThemeProvider>
  );
}
