from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

assuntos = []


@app.route("/assuntos", methods=["GET"])
def listar_assuntos():
    return jsonify(assuntos)


@app.route("/assuntos", methods=["POST"])
def adicionar_assunto():
    dados = request.get_json()
    texto = dados.get("texto", "").strip()

    if not texto:
        return jsonify({"erro": "texto vazio"}), 400

    assuntos.append(texto)
    return jsonify(assuntos), 201


if __name__ == "__main__":
    app.run(debug=True)