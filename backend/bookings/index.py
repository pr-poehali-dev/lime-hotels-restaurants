import json
import os
from datetime import datetime
import psycopg2
from psycopg2.extras import RealDictCursor
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save and retrieve hotel room bookings
    Args: event - dict with httpMethod, body, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database configuration missing'})
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        room_title = body_data.get('room_title')
        room_price = body_data.get('room_price')
        guest_name = body_data.get('guest_name')
        guest_phone = body_data.get('guest_phone')
        guest_email = body_data.get('guest_email')
        checkin_date = body_data.get('checkin_date')
        nights = body_data.get('nights')
        
        if not all([room_title, room_price, guest_name, guest_phone, guest_email, checkin_date, nights]):
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Missing required fields'})
            }
        
        cursor.execute(
            "INSERT INTO bookings (room_title, room_price, guest_name, guest_phone, guest_email, checkin_date, nights) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id",
            (room_title, room_price, guest_name, guest_phone, guest_email, checkin_date, nights)
        )
        
        booking_id = cursor.fetchone()['id']
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'booking_id': booking_id})
        }
    
    if method == 'GET':
        cursor.execute(
            "SELECT id, room_title, room_price, guest_name, guest_phone, guest_email, checkin_date, nights, created_at FROM bookings ORDER BY created_at DESC"
        )
        
        bookings = cursor.fetchall()
        cursor.close()
        conn.close()
        
        result = []
        for booking in bookings:
            result.append({
                'id': booking['id'],
                'room_title': booking['room_title'],
                'room_price': booking['room_price'],
                'guest_name': booking['guest_name'],
                'guest_phone': booking['guest_phone'],
                'guest_email': booking['guest_email'],
                'checkin_date': booking['checkin_date'].isoformat() if booking['checkin_date'] else None,
                'nights': booking['nights'],
                'created_at': booking['created_at'].isoformat() if booking['created_at'] else None
            })
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'bookings': result})
        }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
