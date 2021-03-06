import axios from "axios";

export default {
    // Gets all clothes
    getCloset: function(id) {
        return axios.get("/api/closet/" + id);
    },
    // Saves clothes to the database
    saveCloset: function(clothesData) {
        return axios.post("/api/closet", clothesData);
    },
    // Deletes the book with the given id
    deleteCloset: function(id) {
      return axios.delete("/api/closet/" + id);
    },
    // Deletes the book with the given id
    updateCloset: function(id, body) {
        return axios.put("/api/closet/" + id, body);
    },
    // SignUpInForm post function
    saveSignUp: function(creds){
      return axios.post("/api/signup", creds);
    }


};
