<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());
        return response()->json([
            'ok' => true,
            'message' => 'Brief received.',
            'id' => $contact->id,
        ], 201);
    }
}
