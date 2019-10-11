QUnit.module('Main', {})

QUnit.test( "Test addition of two numbers", function( assert ) {
    assert.equal(testsubmit1(1, 0), 1, "sum of two number gives value 1")
    assert.equal(testsubmit1(2, 3), 5, "sum of two number gives value 5")
    assert.equal(testsubmit1(1, 2), 3, "sum of two number gives value 3")
    assert.equal(testsubmit1(1, 3), 4, "sum of two number gives value 4")
    assert.equal(testsubmit1(1, 4), 5, "sum of two number gives value 5")
})
window.addEventListener('load', () => {
    const appURL = '../index.html' 
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>' // go grab it!
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {                
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end) // we only want part of the page
        const qunitFixtureBody = document.querySelector('#qunit-fixture')
        qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
        console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
        QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })

  