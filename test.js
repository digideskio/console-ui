let {print, paragraph, indent, listItem, text} = require('./lib')

let em = text.white.bold;

let error = text.red;

function loc(line, col) {
  return ['line ', em(line), ' column ', em(col)]
}

function errorHeader(filename, line, col) {
  return ['At ', em(filename), ' ', loc(line, col)]
}

print(
  paragraph(error('Errors found:')),
  listItem(
    paragraph(errorHeader('index.js', 10, 23)),
    paragraph('Cannot find module ', em('react'))
  )
)
