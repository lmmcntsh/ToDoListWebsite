let mongoose = require('mongoose');
//create list model

//serves as a template for how the list entries are formatted
let listModel = mongoose.Schema({
    item: String,
    description: String,
    when: String,

},
{
    collection: 'list' //use collection named "list"
});
module.exports = mongoose.model('list', listModel);