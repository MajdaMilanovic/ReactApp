import { db } from "../firebase";
import { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot, where, query} from "firebase/firestore";
import { Task } from "../types/Task";

export const addTask = async (task:Omit<Task, "id">): Promise<string> => {
    try {
        const docRef  =await addDoc(collection(db, "tasks"), task);
        return docRef.id;
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
        
    }
};
export const getTask = async (taskId: string): Promise<Task | null> => {
try {
const taskDoc = await getDoc(doc(db, "tasks", taskId));
if (taskDoc.exists()) {
return { id: taskDoc.id, ...taskDoc.data() } as Task;
} else {
return null;
}
} catch (error) {
console.error("Error getting task:", error);
throw error;
}
};

export const updateTask = async (
  taskId: string,
  updates: Partial<Task>
): Promise<void> => {
  try {
    await updateDoc(doc(db, "tasks", taskId), updates);
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};


export const getUserTasksRealtime = (
  userId: string,
  callback: (tasks: Task[]) => void
) => {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  return onSnapshot(q, (querySnapshot) => {
    const tasks = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Task)
    );
    callback(tasks);
  });
};









