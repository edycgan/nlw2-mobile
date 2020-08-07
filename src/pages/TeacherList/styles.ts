import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  filtersVisibleButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButton: {
    height: 56,
    backgroundColor: "#04d361",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    color: "#fff",
  },
});

export default styles;
