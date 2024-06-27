<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MantramResource\Pages;
use App\Filament\Resources\MantramResource\RelationManagers;
use App\Models\Mantram;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MantramResource extends Resource
{

    protected static ?string $model = Mantram::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function getLabel(): ?string
    {
        return 'Mantram';
    }

    public static function getPluralLabel(): ?string
    {
        return 'Mantram';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Nama mantra')
                    ->required(),
                Forms\Components\Select::make('mantram_base_id')
                    ->label('Jenis Mantram')
                    ->relationship('mantramBase', 'name')
                    ->required()
                    ->createOptionForm([
                        Forms\Components\TextInput::make('name')
                            ->label('Jenis mantra')
                            ->maxLength(255)
                            ->required(),
                    ]),
                Forms\Components\Textarea::make('description')
                    ->label('Deskripsi')
                    ->maxLength(500),
                Forms\Components\Textarea::make('mantram')
                    ->maxLength(2000)
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\FileUpload::make('audio_url')
                    ->label('Audio mantram')
                    ->directory('mantram')
                // ->acceptedFileTypes(['.mp3', '.wav', '.ogg'])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('mantramBase.name')
                    ->label('Jenis mantram')
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('mantram_base_id')
                    ->label('Jenis mantra')
                    ->relationship('mantramBase', 'name')
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMantrams::route('/'),
            'create' => Pages\CreateMantram::route('/create'),
            'edit' => Pages\EditMantram::route('/{record}/edit'),
        ];
    }
}