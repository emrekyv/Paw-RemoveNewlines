var RemoveNewline = function() {
  this.evaluate = function(context) {
    var t = this.text;
    return t.replace(/[\r\n]/g, '');
  }
}

RemoveNewline.identifier = "com.emrekyv.PawExtensions.RemoveNewlines";
RemoveNewline.title = "Remove Newlines"
RemoveNewline.inputs = [
  InputField("text", "Text", "String")
]

registerDynamicValueClass(RemoveNewline)