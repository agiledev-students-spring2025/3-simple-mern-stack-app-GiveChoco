const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JinLeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }

  }
)

// create mongoose Model
const Biography = mongoose.model('Biography', JinLeeSchema)

// export the model so other modules can import it
module.exports = {
  Biography,
}
