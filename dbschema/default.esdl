module default {
    type Task {
        required title: str;
        required description: str;
        required completed: bool {
            default := false;
        }
    }
}
