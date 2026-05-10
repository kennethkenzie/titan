@extends('layouts.admin')

@section('title', 'Enquiries')
@section('heading', 'Enquiries')

@section('content')

    <div class="mb-5">
        <p class="text-sm text-white/40">{{ $contacts->total() }} {{ Str::plural('enquiry', $contacts->total()) }} total</p>
    </div>

    @if ($contacts->isEmpty())
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-16 text-center">
            <p class="text-sm text-white/30">No enquiries received yet.</p>
        </div>
    @else
        <div class="space-y-3">
            @foreach ($contacts as $contact)
                <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p class="font-semibold">{{ $contact->name }}</p>
                            <div class="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-white/45">
                                <a href="mailto:{{ $contact->email }}" class="transition hover:text-white">{{ $contact->email }}</a>
                                @if ($contact->phone)
                                    <span>{{ $contact->phone }}</span>
                                @endif
                                @if ($contact->company)
                                    <span>{{ $contact->company }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="flex shrink-0 items-center gap-3">
                            <p class="text-xs text-white/30">{{ $contact->created_at->format('d M Y, H:i') }}</p>
                            <form method="POST" action="{{ route('admin.contacts.destroy', $contact) }}"
                                  onsubmit="return confirm('Delete this enquiry?')">
                                @csrf @method('DELETE')
                                <button type="submit"
                                    class="rounded-lg border border-red-500/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-red-500/50 transition hover:border-red-500/40 hover:text-red-400">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                    @if ($contact->message)
                        <p class="mt-4 border-t border-white/[0.06] pt-4 text-sm leading-6 text-white/55">{{ $contact->message }}</p>
                    @endif
                </div>
            @endforeach
        </div>
        <div class="mt-5">{{ $contacts->links() }}</div>
    @endif

@endsection
