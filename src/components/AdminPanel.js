import React from "react";
import "./AdminPanel.css";
import AdminForm from "./AdminForm";
import useDataHook from "./dataHook";
import AlbumData from "./AlbumData";
import ReactDOM from 'react-dom';

const AdminPanel = () => {
  const { data, refetchData } = useDataHook();

  const deleteAlbum = (albumId) => {
    fetch(`http://localhost:3001/albums/${albumId}`, {
      method: "DELETE",
    }).then(() => refetchData());
  };

  const viewAlbum = (albumId) => {
    ReactDOM.render(<AlbumData id={albumId}/>, document.getElementById('root'));
  };

  const editAlbum = (albumId) => {
    // fetch(`http://localhost:3001/albums/${albumId}`, {
    //   method: "POST",
    // }).then(() => refetchData());
  };

  return (
    <div>
      <h1>Admin panel</h1>
      <AdminForm onSuccess={() => refetchData()} />
      <div className="albums-list">
        <div className="album-item">id</div>
        <div className="album-item">title</div>
        <div className="album-item">ACTIONS</div>
        {data.map((album, index) => {
          return (
            <React.Fragment key={index}>
              <div className="album-item">{album.id}</div>
              <div className="album-item">{album.title}</div>
              <div className="album-item">
                <button
                  className="delete-button"
                  onClick={() => deleteAlbum(album.id)}
                >
                  DELETE
                </button>
                <button
                  className="delete-button"
                  onClick={() => editAlbum(album.id)}
                >
                  EDIT
                </button>

                <button
                  className="delete-button"
                  onClick={() => viewAlbum(album.id)}
                >
                  VIEW
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPanel;
