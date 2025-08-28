📁 Answer the following questions :

Q1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer :
      As 'id' is given to a specific tag and it is unique , so by calling this id we can add event for a specific html tag.
      By calling 'getElementsByClassName' dom returns a live HTML collection under the same class name.
      querySelector uses a CSS selector to find and return the first matching element.
      But  'querySelectorAll' returns an array collection for all matching element as NodeList.


Q2. How do you **create and insert a new element into the DOM**?

Answer: 
    step 01 : get the parent using getElementById where you want to add new element
    step 02 : create new element using  document.createElement('element tag name')
    step 03 : insert the new element into the parent using appendChild()
    

Q3. What is **Event Bubbling** and how does it work?

Answer :
    Event Bubbling is a process where if an event happens on a child element, it first runs on that child, then on its parent, then all the way up on its ancestors. It's also known as bubbling phase.
    How it worked:
    When an event (like a click or mouseover or double click...) occurs on an element, it first runs the handlers on that element, then on its parent, and then on all other ancestors up to the document.For Example from an 'li' tag to its parent 'ul', 'ul' to its parent say section , then section to body finally body to html. 

Q4. What is **Event Delegation** in JavaScript? Why is it useful?

    Answer:
        Event Delegation is a technique where instead of adding event listeners to each child element, we add a single event listener to a parent element.
        Why Useful:
        1. it works for dynamic element
        2. Uses only one event listener instead of many, which saves memory
        3. less code required

Q5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: 
    If we call 'stopPropagation()' for an event this stops the event from moving up or down the DOM tree (bubbling or capturing). Means the functionality will not pass from child to parent.
    If we call 'preventDefault()' this stops the browser's default behavior for that event. For example, it can prevent a link from loading a new page or a form from submitting.

