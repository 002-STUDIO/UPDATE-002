const express = require('express');
const commonWords = ["the", "and", "a", "in", "why", "can"];

function removeCommonWords(text) {
  const regex = new RegExp(`\\b(${commonWords.join('|')})\\b`, 'gi');
  return text.replace(regex, '').trim();
}

function searchLoreBooks(filteredText) {
  // Placeholder function for searching lore books
  return `Relevant data from lore books based on: ${filteredText}`;
}

function processChatUpdate(chatText) {
  const filteredText = removeCommonWords(chatText);
  const relevantData = searchLoreBooks(filteredText);
  injectDataIntoLLM(relevantData);
}

function injectDataIntoLLM(data) {
  console.log("Data injected into LLM:", data);
}

async function init(router) {
  router.get('/process', (req, res) => {
    const chatText = req.query.text || "Default chat text";
    processChatUpdate(chatText);
    res.send("Chat processed");
  });
  console.log('Extension-UPDATE-002 plugin loaded!');
  return Promise.resolve();
}

async function exit() {
  return Promise.resolve();
}

module.exports = {
  init,
  exit,
  info: {
    id: 'extension-update-002',
    name: 'Extension-UPDATE-002',
    description: 'Adds and removes data from the worldinfo inside of Silly Tavern. Plus much more...',
  },
};
