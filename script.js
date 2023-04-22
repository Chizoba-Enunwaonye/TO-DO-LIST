window.addEventListener('load', () => {
    const form = document.querySelector("#new-list-form");
    const input = document.querySelector("#new-list-input");
    const lists_el =document.querySelector("#list");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const list = input.value;

        if (!list) {
            alert("Please fill out the list");
            return;
        }

        const list_el = document.createElement("div");
        list_el.classList.add("list");

        const list_content_el = document.createElement("div");
        list_content_el.classList.add("content");

        list_el.appendChild(list_content_el);

        const list_input_el = document.createElement("input");
        list_input_el.classList.add("text");
        list_input_el.type = "text"
        list_input_el.value = list;
        list_input_el.setAttribute("readonly", "readonly");

        list_content_el.appendChild(list_input_el);

        const list_actions_el = document.createElement("div");
        list_actions_el.classList.add("actions");

        const list_edit_el = document.createElement("button");
        list_edit_el.classList.add("edit");
        list_edit_el.innerHTML = "Edit";

        const list_delete_el = document.createElement
        ("button");
        list_delete_el.classList.add("delete");
        list_delete_el.innerHTML = "Delete";

        list_actions_el.appendChild(list_edit_el);
        list_actions_el.appendChild(list_delete_el);

        list_el.appendChild(list_actions_el);

        lists_el.appendChild(list_el);

        input.value = "";

        list_edit_el.addEventListener('click', () => {
            if (list_edit_el.innerText.toLowerCase() ==
            "edit") {
               list_input_el.removeAttribute("readonly");
               list_input_el.focus();
               list_edit_el.innerText = "Save";
            } else {
                list_input_el.setAttribute("readonly", 
                "readonly");
                list_edit_el.innerText = "Edit";
            }
        });

        list_delete_el.addEventListener('click', () => {
            lists_el.removeChild(list_el);
            });

    })
})