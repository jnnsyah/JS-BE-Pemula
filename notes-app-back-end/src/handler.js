/* eslint-disable no-unused-vars */
const { nanoid } = require('nanoid');
const notes = require('./notes');

// Handler untuk menambahkan notes
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updateAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id ===id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// Handler untuk lihat semua note
const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

// Handler menampilkan detail note
const getNodeByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Handler update
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updateAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbaharui catatan. Id tidak ditemukan',
    }).code(404);
  }

  notes[index] = {
    ...notes[index],
    title: title ?? notes[index].title,
    tags: tags ?? notes[index].tags,
    body: body ?? notes[index].body,
    updateAt,
  };

  return h.response({
    status: 'success',
    message: 'Catatan berhasil diperbaharui',
  }).code(200);
};

// Handler Delete note
const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal menghapus note. Id tidak ditemukan',
    }).code(404);
  }

  notes.splice(index, 1);

  return h.response({
    status: 'success',
    message: 'Catatan berhasil dihapus',
  }).code(200);
};

module.exports = { addNoteHandler, getAllNotesHandler, getNodeByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler };