package fr.azaddyne.util;

import fr.azaddyne.model.Todo;

import java.util.ArrayList;
import java.util.List;

public class TodoGen {
    public static List<Todo> TodoListcreate() {
        List<Todo> list = new ArrayList<Todo>();
        for (int i = 0; i < 5; i++) {
            list.add(Todo.Builder.aTodo().withText(i+" hihihi").build());
        }
        return list;
    }
}
