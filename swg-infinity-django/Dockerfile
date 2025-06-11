# Use an official Python runtime as a parent image
FROM python:3.12-slim-bookworm

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    # Add other system dependencies here if needed in the future (e.g., libgdal-dev for GeoDjango)
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project code
COPY . /app/

# Expose port 8000
EXPOSE 8000

# Command to run the application
# For development, you might use: CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# For a more production-like setup (though still dev-focused for now), use Gunicorn:
# Ensure gunicorn is in requirements.txt or install it: RUN pip install gunicorn
# CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
# For now, let's stick with runserver for simplicity, assuming gunicorn might not be in requirements.txt yet
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
