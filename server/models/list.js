let mongoose = require('mongoose');
//create book model
let listModel = mongoose.Schema({
    item: String,
    description: String,
    when: String,

},
{
    collection: 'list'
});
module.exports = mongoose.model('list', listModel);