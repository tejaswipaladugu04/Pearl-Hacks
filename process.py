from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    input_text = data['inputText']

    # Process the input text (replace this with your actual processing logic)
    # processed_text = f'Processed: {input_text.upper()}'
    processed_text = input_text.upper()

    return jsonify({'result':processed_text})


if __name__ == '__main__':
    app.run(debug=False)