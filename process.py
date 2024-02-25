from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def processText():
    data = request.get_json()
    input_text = data['stressLevel']

    # Process the input text (replace this with your actual processing logic)
    # processed_text = f'Processed: {input_text.upper()}'
    if int(input_text) >5:
        processed_text = 'wow ur really stressed'
    else:
        processed_text = 'nice ur not too stressed'

    return jsonify({'result':processed_text})


if __name__ == '__main__':
    app.run(debug=False)