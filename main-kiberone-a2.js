const data =[
    {title:"Maka children cry",p: "Take all candy from children"},
    {title:""}
]


document.querySelector('abtn_submit').addEventListener('click',() => {
    const inputtData = input.value
    input.value = ""

    const_todo_el = document.createElement('div')
    todo_el.classList.add(todo_item)
    todo_el.classList.add(hover_effect)
    const hover = document.querySelector(",hover_effect")
    hover.addEventListener("click",()=>{

    })  
    const_todo_cconstent_el = document.createElement('div')
    todo_el.appendCild(const_todo_cconstent_el)

    const todo_input_el =document.createElement('input')
    todo_input_el.classList.add(text)
    todo_input_el.type = ("text")
    todo_input_el.value = inputtData?inputtData:data[Math.floor(Math.random()*data.length)].title
    todo_input_el.setAttribute("readonly","readonly")

    todo_content_el.appendCild(todo_input_el)

    const todo_actions_el = document.createElement('div')
    todo_actions_el.classList.add("action_item")

    const todo_done_el = document.createElement('i')
    todo_done_el.classList.add("fa_solid")
    todo_done_el.classList.add("fa_solid")

    const todo_edit_el = document.createElement('i')
    todo_done_el.classList.add("fa_solid")
    todo_done_el.classList.add("fa_solid")

    const todo_delete_el = document.createElement('i')
    todo_done_el.classList.add("fa_solid")
    todo_done_el.classList.add("fa_solid")

    todo_el.appendCild(todo_actions_el)
    todo_el.appendCild(todo_edit_el)
    todo_el.appendCild(todo_delete_el)

    console.log(todo_el)
    document.querySelector(".todo_lists").appendCild(todo_el)
}
)
